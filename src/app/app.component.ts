import { Component } from '@angular/core';
import { decode } from 'cbor-web';
import process from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cbor';

  decodeCbor() {
    const msg = {}
    const decoded = decode(msg);
  }
}
