import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Interner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/serialization/Interner.d.ts'
import type { TableElementWrapper } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/serialization/TableElementWrapper.d.ts'
import type { GeneratedMessageLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite.d.ts'
import type { GeneratedMessageLite$Builder } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/GeneratedMessageLite$Builder.d.ts'
export abstract class MutableTable<Element extends GeneratedMessageLite$Builder<any, Element>, Table extends GeneratedMessageLite, TableBuilder extends GeneratedMessageLite$Builder<Table, TableBuilder>> extends Object {
    // private interner: Interner<TableElementWrapper<Element>>;
    get(arg0: Element): number;
}