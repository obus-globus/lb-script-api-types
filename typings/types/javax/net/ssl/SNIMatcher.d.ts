import type { SNIServerName } from '../../../javax/net/ssl/SNIServerName.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SNIMatcher extends Object {
    constructor(arg0: number)
    readonly type: number;
    getType(): number;
    matches(arg0: SNIServerName): boolean;
}