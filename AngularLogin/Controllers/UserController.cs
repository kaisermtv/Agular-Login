using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularLogin.Model;
using Microsoft.AspNetCore.Mvc;

namespace AngularLogin.Controllers
{

	[Route("api/[controller]")]
	public class UserController : Controller
    {
		AppDbContext DbContext;

		public UserController(AppDbContext context)
		{
			DbContext = context;
		}


		public IActionResult Index()
        {
			

			return View();
        }
    }
}