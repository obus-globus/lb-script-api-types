import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export interface Button$CreateNarration extends Object {
    createNarrationMessage(defaultNarrationSupplier: () => MutableComponent): MutableComponent;
}