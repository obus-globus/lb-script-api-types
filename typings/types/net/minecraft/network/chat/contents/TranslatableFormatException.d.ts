import type { IllegalArgumentException } from '../../../../../java/lang/IllegalArgumentException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { TranslatableContents } from '../../../../../net/minecraft/network/chat/contents/TranslatableContents.d.ts'
export class TranslatableFormatException extends IllegalArgumentException {
    constructor(component: TranslatableContents, index: number)
    constructor(component: TranslatableContents, message: string)
    constructor(component: TranslatableContents, t: Throwable)
}