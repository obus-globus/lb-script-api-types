import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IReferenceMapper } from '../../../../../org/spongepowered/asm/mixin/refmap/IReferenceMapper.d.ts'
export class ReferenceMapper extends Object implements Serializable, IReferenceMapper {
    static DEFAULT_MAPPER: ReferenceMapper;
    static DEFAULT_RESOURCE: string;
    static read(paramarg0: Reader, paramarg1: string): ReferenceMapper;
    static read(paramarg0: string): ReferenceMapper;
    constructor()
    readonly context: string;
    // private data: JavaMap<string, JavaMap<string, JavaMap<string, string>>>;
    // private mappings: JavaMap<string, JavaMap<string, string>>;
    // private readOnly: boolean;
    // private resource: string;
    addMapping(arg0: string, arg1: string, arg2: string, arg3: string): string;
    getContext(): string;
    getResourceName(): string;
    getStatus(): string;
    isDefault(): boolean;
    remap(arg0: string, arg1: string): string;
    // private remap(arg0: JavaMap<string, JavaMap<string, string>>, arg1: string, arg2: string): string;
    remapWithContext(arg0: string, arg1: string, arg2: string): string;
    setContext(arg0: string): void;
    // private setResourceName(arg0: string): void;
    write(arg0: Appendable): void;
}