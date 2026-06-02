import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IClassProvider } from '../../../../../org/spongepowered/asm/service/IClassProvider.d.ts'
export class ModLauncherClassProvider extends Object implements IClassProvider {
    constructor()
    findAgentClass(arg0: string, arg1: boolean): Class<Object>;
    findClass(arg0: string): Class<Object>;
    findClass(arg0: string, arg1: boolean): Class<Object>;
    getClassPath(): URL[];
}