import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { ClassFileTransformer } from '../../../../java/lang/instrument/ClassFileTransformer.d.ts'
import type { ProtectionDomain } from '../../../../java/security/ProtectionDomain.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AgentPremain$DebugProbesTransformer extends Object implements ClassFileTransformer {
    static INSTANCE: AgentPremain$DebugProbesTransformer;
    transform(arg0: ClassLoader, arg1: string, arg2: Class<Object>, arg3: ProtectionDomain, arg4: number[]): number[];
    transform(arg0: Module, arg1: ClassLoader, arg2: string, arg3: Class<Object>, arg4: ProtectionDomain, arg5: number[]): number[];
    transform(loader: ClassLoader | null, className: string, classBeingRedefined: Class<Object> | null, protectionDomain: ProtectionDomain, classfileBuffer: number[] | null): number[] | null;
}