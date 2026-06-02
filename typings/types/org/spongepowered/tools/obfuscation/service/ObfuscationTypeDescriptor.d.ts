import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObfuscationEnvironment } from '../../../../../org/spongepowered/tools/obfuscation/ObfuscationEnvironment.d.ts'
export class ObfuscationTypeDescriptor extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: Class<ObfuscationEnvironment>)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: Class<ObfuscationEnvironment>)
    readonly environmentType: Class<ObfuscationEnvironment>;
    // private extraInputFilesArgName: string;
    // private inputFileArgName: string;
    readonly key: string;
    // private outFileArgName: string;
    getEnvironmentType(): Class<ObfuscationEnvironment>;
    getExtraInputFilesOption(): string;
    getInputFileOption(): string;
    getKey(): string;
    getOutputFileOption(): string;
}