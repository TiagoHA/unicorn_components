import { Component, HostBinding } from '@angular/core';

import { UniBaseComponent } from '../../base/base/base.component';

@Component({
    selector: 'uni-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class UniBadgeComponent extends UniBaseComponent {

    @HostBinding('class.uni-badge') componentClass = true;
}
