import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Name } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { ImplicitReceiver } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/receivers/ImplicitReceiver.d.ts'
export interface ImplicitContextReceiver extends Object, ImplicitReceiver{
    getCustomLabelName(): Name;
}