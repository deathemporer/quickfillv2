using GraphQL;
using GraphQL.Server;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using QuickFillUserAPI.Data;
using QuickFillUserAPI.Data.GraphQL;
using QuickFillUserAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickFillUserAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<QuickFillDBContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:QuickFillApp"]));

            services.AddScoped<UserRepository>();
            services.AddScoped<StationRepository>();
            services.AddScoped<WalletRepository>();

            services.AddScoped<IServiceProvider>(s => new FuncServiceProvider(s.GetRequiredService));
            services.AddScoped<QuickFillSchema>();

            services.AddGraphQL().AddSystemTextJson().AddGraphTypes(ServiceLifetime.Scoped);

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseGraphQL<QuickFillSchema>();

            app.UseGraphQLPlayground();
        }
    }
}
