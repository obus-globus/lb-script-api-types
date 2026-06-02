import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { ModuleDescriptor$Builder } from '../../../java/lang/module/ModuleDescriptor$Builder.d.ts'
import type { ModuleDescriptor$Exports } from '../../../java/lang/module/ModuleDescriptor$Exports.d.ts'
import type { ModuleDescriptor$Modifier } from '../../../java/lang/module/ModuleDescriptor$Modifier.d.ts'
import type { ModuleDescriptor$Opens } from '../../../java/lang/module/ModuleDescriptor$Opens.d.ts'
import type { ModuleDescriptor$Provides } from '../../../java/lang/module/ModuleDescriptor$Provides.d.ts'
import type { ModuleDescriptor$Requires } from '../../../java/lang/module/ModuleDescriptor$Requires.d.ts'
import type { ModuleDescriptor$Version } from '../../../java/lang/module/ModuleDescriptor$Version.d.ts'
import type { AccessFlag } from '../../../java/lang/reflect/AccessFlag.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export class ModuleDescriptor extends Object implements Comparable<ModuleDescriptor> {
    static newAutomaticModule(paramarg0: string): ModuleDescriptor$Builder;
    static newModule(paramarg0: string): ModuleDescriptor$Builder;
    static newModule(paramarg0: string, paramarg1: ModuleDescriptor$Modifier[]): ModuleDescriptor$Builder;
    static newOpenModule(paramarg0: string): ModuleDescriptor$Builder;
    static read(paramarg0: InputStream): ModuleDescriptor;
    static read(paramarg0: InputStream, paramarg1: () => Object | null): ModuleDescriptor;
    static read(paramarg0: ByteBuffer): ModuleDescriptor;
    static read(paramarg0: ByteBuffer, paramarg1: () => Object | null): ModuleDescriptor;
    private constructor(arg0: string, arg1: ModuleDescriptor$Version, arg2: string, arg3: ModuleDescriptor$Modifier[], arg4: ModuleDescriptor$Requires[], arg5: ModuleDescriptor$Exports[], arg6: ModuleDescriptor$Opens[], arg7: string[], arg8: ModuleDescriptor$Provides[], arg9: string[], arg10: string)
    private constructor(arg0: string, arg1: ModuleDescriptor$Version, arg2: ModuleDescriptor$Modifier[], arg3: ModuleDescriptor$Requires[], arg4: ModuleDescriptor$Exports[], arg5: ModuleDescriptor$Opens[], arg6: string[], arg7: ModuleDescriptor$Provides[], arg8: string[], arg9: string, arg10: number, arg11: boolean)
    readonly automatic: boolean;
    // private exports: ModuleDescriptor$Exports[];
    // private hash: number;
    // private mainClass: string;
    // private modifiers: ModuleDescriptor$Modifier[];
    // private name: string;
    readonly open: boolean;
    // private opens: ModuleDescriptor$Opens[];
    // private packages: string[];
    // private provides: ModuleDescriptor$Provides[];
    // private rawVersionString: string;
    // private requires: ModuleDescriptor$Requires[];
    // private uses: string[];
    // private version: ModuleDescriptor$Version;
    accessFlags(): AccessFlag[];
    compareTo(arg0: ModuleDescriptor): number;
    equals(arg0: Object | null): boolean;
    exports(): ModuleDescriptor$Exports[];
    hashCode(): number;
    isAutomatic(): boolean;
    isOpen(): boolean;
    mainClass(): Optional<string>;
    modifiers(): ModuleDescriptor$Modifier[];
    name(): string;
    opens(): ModuleDescriptor$Opens[];
    packages(): string[];
    provides(): ModuleDescriptor$Provides[];
    rawVersion(): Optional<string>;
    requires(): ModuleDescriptor$Requires[];
    toNameAndVersion(): string;
    toString(): string;
    uses(): string[];
    version(): Optional<ModuleDescriptor$Version>;
}