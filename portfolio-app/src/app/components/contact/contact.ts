import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; margin-bottom: 30px;">Contact</h2>
      
      <div style="max-width: 600px;">
        <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3498db;">
          <h3 style="color: #2c3e50; margin: 0 0 8px 0; font-size: 16px;">📧 Email</h3>
          <a href="mailto:mspatil.work@outlook.com" 
             style="color: #3498db; text-decoration: none; font-size: 15px;">
            mspatil.work@outlook.com
          </a>
        </div>
        
        <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3498db;">
          <h3 style="color: #2c3e50; margin: 0 0 8px 0; font-size: 16px;">📱 Phone</h3>
          <p style="color: #555; margin: 0; font-size: 15px;">+91 7057942004</p>
        </div>
        
        <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3498db;">
          <h3 style="color: #2c3e50; margin: 0 0 8px 0; font-size: 16px;">🔗 LinkedIn</h3>
          <a href="https://www.linkedin.com/in/mayurpatil034/" 
             target="_blank"
             style="color: #3498db; text-decoration: none; font-size: 15px;">
            https://www.linkedin.com/in/mayurpatil034/
          </a>
        </div>
        
        <div style="margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #3498db;">
          <h3 style="color: #2c3e50; margin: 0 0 8px 0; font-size: 16px;">💻 GitHub</h3>
          <a href="https://github.com/MayurPatil034" 
             target="_blank"
             style="color: #3498db; text-decoration: none; font-size: 15px;">
            https://github.com/MayurPatil034
          </a>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent { }