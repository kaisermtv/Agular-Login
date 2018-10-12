using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AngularLogin.Model
{
	public class TabRole 
	{
		[Key]
		public int Id { get; set; }
		public string Rolename { get; set; }
	}
}
