import type { DumperOptions } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions.d.ts'
import type { DumperOptions$FlowStyle } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { LoaderOptions } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { TypeDescription } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/TypeDescription.d.ts'
import type { BaseConstructor } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/BaseConstructor.d.ts'
import type { Event } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { BeanAccess } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/BeanAccess.d.ts'
import type { Node } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { Tag } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { StreamReader } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/reader/StreamReader.d.ts'
import type { Representer } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/representer/Representer.d.ts'
import type { Resolver } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/resolver/Resolver.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Pattern } from '../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Yaml extends Object {
    constructor()
    constructor(arg0: DumperOptions)
    constructor(arg0: LoaderOptions)
    constructor(arg0: LoaderOptions, arg1: DumperOptions)
    constructor(arg0: BaseConstructor)
    constructor(arg0: BaseConstructor, arg1: Representer)
    constructor(arg0: BaseConstructor, arg1: Representer, arg2: DumperOptions)
    constructor(arg0: BaseConstructor, arg1: Representer, arg2: DumperOptions, arg3: LoaderOptions)
    constructor(arg0: BaseConstructor, arg1: Representer, arg2: DumperOptions, arg3: LoaderOptions, arg4: Resolver)
    constructor(arg0: BaseConstructor, arg1: Representer, arg2: DumperOptions, arg3: Resolver)
    constructor(arg0: Representer)
    constructor(arg0: Representer, arg1: DumperOptions)
    // private constructor: BaseConstructor;
    // private dumperOptions: DumperOptions;
    // private loadingConfig: LoaderOptions;
    readonly name: string;
    // private representer: Representer;
    // private resolver: Resolver;
    addImplicitResolver(arg0: Tag, arg1: Pattern, arg2: string): void;
    addImplicitResolver(arg0: Tag, arg1: Pattern, arg2: string, arg3: number): void;
    addTypeDescription(arg0: TypeDescription): void;
    compose(arg0: Reader): Node;
    composeAll(arg0: Reader): Node[];
    dump(arg0: Object): string;
    dump(arg0: Object, arg1: Writer): void;
    dumpAll(arg0: Iterator<Object>): string;
    dumpAll(arg0: Iterator<Object>, arg1: Writer): void;
    // private dumpAll(arg0: Iterator<Object>, arg1: Writer, arg2: Tag): void;
    dumpAs(arg0: Object, arg1: Tag, arg2: DumperOptions$FlowStyle): string;
    dumpAsMap(arg0: Object): string;
    getName(): string;
    load<T extends unknown>(arg0: InputStream): T;
    load<T extends unknown>(arg0: Reader): T;
    load<T extends unknown>(arg0: string): T;
    loadAll(arg0: InputStream): Object[];
    loadAll(arg0: Reader): Object[];
    loadAll(arg0: string): Object[];
    loadAs<T extends unknown>(arg0: InputStream, arg1: Class<T>): T;
    loadAs<T extends unknown>(arg0: Reader, arg1: Class<T>): T;
    loadAs<T extends unknown>(arg0: string, arg1: Class<T>): T;
    // private loadFromReader(arg0: StreamReader, arg1: Class<Object>): Object;
    parse(arg0: Reader): Event[];
    represent(arg0: Object): Node;
    serialize(arg0: Node): Event[];
    serialize(arg0: Node, arg1: Writer): void;
    setBeanAccess(arg0: BeanAccess): void;
    setName(arg0: string): void;
    toString(): string;
}