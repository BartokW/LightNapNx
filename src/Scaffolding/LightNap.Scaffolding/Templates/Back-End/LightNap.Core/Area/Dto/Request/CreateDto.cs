﻿// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version: 17.0.0.0
//  
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------
namespace LightNap.Scaffolding.Templates
{
    using System.Linq;
    using System.Text;
    using System.Collections.Generic;
    using System;
    
    /// <summary>
    /// Class to produce the template output
    /// </summary>
    
    #line 1 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.TextTemplating", "17.0.0.0")]
    public partial class CreateDto : LightNap.Scaffolding.Templates.BaseTemplate
    {
#line hidden
        /// <summary>
        /// Create the template output
        /// </summary>
        public override string TransformText()
        {
            this.Write("\r\n");
            
            #line 7 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
 foreach (string ns in Parameters.AdditionalDtoNamespaces) { 
            
            #line default
            #line hidden
            this.Write("using ");
            
            #line 8 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(ns));
            
            #line default
            #line hidden
            this.Write(";\r\n");
            
            #line 9 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
 } 
            
            #line default
            #line hidden
            this.Write("\r\nnamespace ");
            
            #line 11 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Parameters.CoreNamespace));
            
            #line default
            #line hidden
            this.Write(".");
            
            #line 11 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Parameters.NameForNamespace));
            
            #line default
            #line hidden
            this.Write(".Request.Dto\r\n{\r\n    public class Create");
            
            #line 13 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(Parameters.PascalName));
            
            #line default
            #line hidden
            this.Write("Dto\r\n    {\r\n        // TODO: Update which fields to include when creating this it" +
                    "em.\r\n");
            
            #line 16 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
 foreach (var property in Parameters.SetProperties) { 
            
            #line default
            #line hidden
            this.Write("        public ");
            
            #line 17 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.BackEndType));
            
            #line default
            #line hidden
            
            #line 17 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.IsNullable ? "?" : ""));
            
            #line default
            #line hidden
            this.Write(" ");
            
            #line 17 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
            this.Write(this.ToStringHelper.ToStringWithCulture(property.Name));
            
            #line default
            #line hidden
            this.Write(" { get; set; }\r\n");
            
            #line 18 "C:\Users\edkai\source\repos\SharpLogic\LightNap\src\Scaffolding\LightNap.Scaffolding\Templates\Back-End\LightNap.Core\Area\Dto\Request\CreateDto.tt"
 } 
            
            #line default
            #line hidden
            this.Write("    }\r\n}");
            return this.GenerationEnvironment.ToString();
        }
    }
    
    #line default
    #line hidden
}
