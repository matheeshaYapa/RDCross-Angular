import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-crosshow',
  templateUrl: './crosshow.component.html',
  styleUrls: ['./crosshow.component.scss', '../../../../assets/css/stylemain.css', '../../../../assets/css/style.css']
})
export class CrosshowComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    let script = this.renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.integrity = `sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN`;
    script.crossOrigin = 'anonymous';
    script.text = `
            {
                "@context": "https://code.jquery.com/jquery-3.2.1.slim.min.js"
                /* your schema.org microdata goes here */
            }
        `;

    this.renderer2.appendChild(this.document.body, script);

    let script2 = this.renderer2.createElement('script');
    script2.type = `application/ld+json`;
    script2.integrity = `sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh`;
    script2.crossOrigin = 'anonymous';
    script2.text = `
            {
                "@context": "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"
                /* your schema.org microdata goes here */
            }
        `;

    this.renderer2.appendChild(this.document.body, script2);

    let script3 = this.renderer2.createElement('script');
    script3.type = `application/ld+json`;
    script3.integrity = `sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ`;
    script3.crossOrigin = 'anonymous';
    script3.text = `
            {
                "@context": "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"
                /* your schema.org microdata goes here */
            }
        `;

    this.renderer2.appendChild(this.document.body, script3);
  }

}
