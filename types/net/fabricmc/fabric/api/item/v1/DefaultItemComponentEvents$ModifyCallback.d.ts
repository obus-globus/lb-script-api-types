import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultItemComponentEvents$ModifyContext } from '../../../../../../net/fabricmc/fabric/api/item/v1/DefaultItemComponentEvents$ModifyContext.d.ts'
export interface DefaultItemComponentEvents$ModifyCallback extends Object{
    modify(arg0: DefaultItemComponentEvents$ModifyContext): void;
}