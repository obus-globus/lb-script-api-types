import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InjectionInfo } from '../../../../../../org/spongepowered/asm/mixin/injection/struct/InjectionInfo.d.ts'
export class InjectorGroupInfo extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    // private isDefault: boolean;
    // private maxCallbackCount: number;
    readonly members: InjectionInfo[];
    // private minCallbackCount: number;
    readonly name: string;
    add(arg0: InjectionInfo): InjectorGroupInfo;
    getMaxAllowed(): number;
    getMembers(): E[];
    getMinRequired(): number;
    getName(): string;
    isDefault(): boolean;
    setMaxAllowed(arg0: number): void;
    setMinRequired(arg0: number): void;
    toString(): string;
    validate(): InjectorGroupInfo;
}