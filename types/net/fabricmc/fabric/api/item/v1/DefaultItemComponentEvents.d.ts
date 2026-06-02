import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Event } from '../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { DefaultItemComponentEvents$ModifyCallback } from '../../../../../../net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents$ModifyCallback.d.ts'
import type { DefaultItemComponentEvents$ModifyContext } from '../../../../../../net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents$ModifyContext.d.ts'
export class DefaultItemComponentEvents extends Object {
    static MODIFY: Event<(param0: DefaultItemComponentEvents$ModifyContext) => void>;
    private constructor()
}