import type { BaseModel } from '../../../../ai/djl/BaseModel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RpcModel extends BaseModel {
    constructor(arg0: string)
    load(arg0: Path[], arg1: string, arg2: { [key: string]: Object | null }): void;
}