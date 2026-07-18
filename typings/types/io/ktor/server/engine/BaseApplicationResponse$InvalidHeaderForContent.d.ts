import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class BaseApplicationResponse$InvalidHeaderForContent extends IllegalStateException implements CopyableThrowable<BaseApplicationResponse$InvalidHeaderForContent> {
    constructor(name: string, content: string)
    // private content: string;
    // private name: string;
    createCopy(): BaseApplicationResponse$InvalidHeaderForContent;
}