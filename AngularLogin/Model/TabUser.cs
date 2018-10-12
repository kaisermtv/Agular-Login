using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularLogin.Model
{
	public class TabUser
	{
		[Key]
		public int Id { get; set; }
		[StringLength(50)]
		public string UserName { get; set; }
		[StringLength(250)]
		public string Password { get; set; }

		[StringLength(50)]
		public string FullName { get; set; }

		public virtual TabRole Role { get; set; }
	}
}
