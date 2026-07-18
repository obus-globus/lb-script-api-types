import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GuestToHostCodeCache } from '../../../../com/oracle/truffle/host/GuestToHostCodeCache.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostMethodDesc } from '../../../../com/oracle/truffle/host/HostMethodDesc.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Executable } from '../../../../java/lang/reflect/Executable.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class HostMethodDesc$SingleMethod extends HostMethodDesc {
    constructor(executable: Executable, parametersScoped: boolean, onlyVisibleFromJniName: boolean)
    readonly genericParameterTypes: Type[];
    readonly onlyVisibleFromJniName: boolean;
    readonly parameterTypes: Class<Object>[];
    // private scopedStaticParameterCount: number;
    // private scopedStaticParameters: number[];
    readonly varArgs: boolean;
    getDeclaringClassName(): string;
    getGenericParameterTypes(): Type[];
    getName(): string;
    getOverloads(): HostMethodDesc$SingleMethod[];
    getParameterCount(): number;
    getParameterTypes(): Class<Object>[];
    getReflectionMethod(): Executable;
    getScopedParameterCount(): number;
    getScopedParameters(): number[];
    hasScopedParameters(): boolean;
    invoke(receiver: Object, arguments: Object[]): Object;
    invokeGuestToHost(receiver: Object, arguments: Object[], cache: GuestToHostCodeCache, context: HostContext, node: Node): Object;
    isConstructor(): boolean;
    isMethod(): boolean;
    isOnlyVisibleFromJniName(): boolean;
    isVarArgs(): boolean;
    toString(): string;
}