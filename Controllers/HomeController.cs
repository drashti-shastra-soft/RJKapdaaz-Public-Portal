using Microsoft.AspNetCore.Mvc;
using RJKapadaazT2.Models;
using System.Diagnostics;

namespace RJKapadaazT2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult index()
        {
            return View();
        }

        public IActionResult about()
        {
            return View();
        }

        public IActionResult blog()
        {
            return View();
        }

        public IActionResult comingsoon()
        {
            return View();
        }

        public IActionResult contact()
        {
            return View();
        }

        public IActionResult product()
        {
            return View();
        }
        public IActionResult linen()
        {
            return View();
        }

        public IActionResult uniform()
        {
            return View();
        }
        public IActionResult testimonial()
        {
            return View();
        }
        public IActionResult export()
        {
            return View();
        }
        public IActionResult carrer()
        {
            return View();
        }
        public IActionResult sitebroken()
        {
            Response.StatusCode = 404;
            return View();
        }

        public IActionResult feedback()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
