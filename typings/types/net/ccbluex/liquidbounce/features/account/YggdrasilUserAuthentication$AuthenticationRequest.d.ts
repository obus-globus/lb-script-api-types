import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { YggdrasilUserAuthentication$Agent } from '../../../../../net/ccbluex/liquidbounce/features/account/YggdrasilUserAuthentication$Agent.d.ts'
export class YggdrasilUserAuthentication$AuthenticationRequest extends Object {
    constructor(agent: YggdrasilUserAuthentication$Agent, username: string, password: string, clientToken: string, requestUser: boolean)
    readonly agent: YggdrasilUserAuthentication$Agent;
    readonly clientToken: string;
    readonly password: string;
    readonly requestUser: boolean;
    readonly username: string;
}