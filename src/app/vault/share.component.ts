import {
    Component,
    OnDestroy,
} from '@angular/core';

import { CipherService } from 'jslib-common/abstractions/cipher.service';
import { CollectionService } from 'jslib-common/abstractions/collection.service';
import { I18nService } from 'jslib-common/abstractions/i18n.service';
import { PlatformUtilsService } from 'jslib-common/abstractions/platformUtils.service';
import { UserService } from 'jslib-common/abstractions/user.service';

import { CollectionView } from 'jslib-common/models/view/collectionView';

import { ShareComponent as BaseShareComponent } from 'jslib-angular/components/share.component';
import { LogService } from 'jslib-common/abstractions/log.service';

@Component({
    selector: 'app-vault-share',
    templateUrl: 'share.component.html',
})
export class ShareComponent extends BaseShareComponent implements OnDestroy {
    constructor(collectionService: CollectionService, platformUtilsService: PlatformUtilsService,
        i18nService: I18nService, userService: UserService,
        cipherService: CipherService, logService: LogService) {
        super(collectionService, platformUtilsService, i18nService, userService, cipherService,
            logService);
    }

    ngOnDestroy() {
        this.selectAll(false);
    }

    check(c: CollectionView, select?: boolean) {
        (c as any).checked = select == null ? !(c as any).checked : select;
    }

    selectAll(select: boolean) {
        const collections = select ? this.collections : this.writeableCollections;
        collections.forEach(c => this.check(c, select));
    }
}
