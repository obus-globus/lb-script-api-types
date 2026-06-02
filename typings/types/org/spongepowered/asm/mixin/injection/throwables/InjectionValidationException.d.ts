import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { InjectorGroupInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectorGroupInfo.d.ts'
export class InjectionValidationException extends Exception {
    constructor(arg0: InjectorGroupInfo, arg1: string)
    readonly group: InjectorGroupInfo;
    getGroup(): InjectorGroupInfo;
}