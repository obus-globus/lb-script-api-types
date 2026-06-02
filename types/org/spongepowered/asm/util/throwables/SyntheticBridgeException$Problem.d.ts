import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { AbstractInsnNode } from '../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class SyntheticBridgeException$Problem extends Enum<SyntheticBridgeException$Problem> {
    static BAD_CAST: SyntheticBridgeException$Problem;
    static BAD_INSN: SyntheticBridgeException$Problem;
    static BAD_INVOKE_DESC: SyntheticBridgeException$Problem;
    static BAD_INVOKE_NAME: SyntheticBridgeException$Problem;
    static BAD_LENGTH: SyntheticBridgeException$Problem;
    static BAD_LOAD: SyntheticBridgeException$Problem;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SyntheticBridgeException$Problem;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private message: string;
    getMessage(arg0: string, arg1: string, arg2: number, arg3: AbstractInsnNode, arg4: AbstractInsnNode): string;
    name(): "BAD_INSN" | "BAD_LOAD" | "BAD_CAST" | "BAD_INVOKE_NAME" | "BAD_INVOKE_DESC" | "BAD_LENGTH";
}