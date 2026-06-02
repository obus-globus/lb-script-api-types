import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/ClassInstance.d.ts'
import type { TinyRemapper$MrjState } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper$MrjState.d.ts'
import type { TrClass } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrField } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrField.d.ts'
import type { TrLocal } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLocal.d.ts'
import type { TrMember$MemberType } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
import type { TrMethod } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
export class MemberInstance extends Object implements TrField, TrMethod {
    static getFieldId(paramarg0: string, paramarg1: string, paramarg2: boolean): string;
    static getId(paramarg0: TrMember$MemberType, paramarg1: string, paramarg2: string, paramarg3: boolean): string;
    static getMethodId(paramarg0: string, paramarg1: string): string;
    static getNameFromId(paramarg0: TrMember$MemberType, paramarg1: string, paramarg2: boolean): string;
    constructor(arg0: TrMember$MemberType, arg1: ClassInstance, arg2: string, arg3: string, arg4: number, arg5: number)
    readonly access: number;
    // private bridgeTarget: MemberInstance;
    // private cls: ClassInstance;
    readonly desc: string;
    readonly index: number;
    locals: TrLocal[];
    readonly name: string;
    readonly newBridgedName: string;
    readonly newName: string;
    // private newNameOriginatingCls: string;
    readonly type: TrMember$MemberType;
    forceSetNewName(arg0: string): void;
    getAccess(): number;
    getContext(): TinyRemapper$MrjState;
    getDesc(): string;
    getId(): string;
    getIndex(): number;
    getLocals(): TrLocal[];
    getName(): string;
    getNewBridgedName(): string;
    getNewMappedName(): string;
    getNewName(): string;
    getOwner(): TrClass;
    getType(): TrMember$MemberType;
    isAbstract(): boolean;
    isBridge(): boolean;
    isVirtual(): boolean;
    setLocals(arg0: TrLocal[]): void;
    setNewName(arg0: string, arg1: boolean): boolean;
    toString(): string;
}