import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector : 'ng2-app',
    templateUrl : 'app/root.component.html',
    directives:[HeaderComponent]
})
export class RootComponent{
    
}