import type { Proxy } from '../../../../java/net/Proxy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { User } from '../../../../net/minecraft/client/User.d.ts'
export class GameConfig$UserData extends Object {
    constructor(user: User, proxy: Proxy)
    proxy: Proxy;
    user: User;
}