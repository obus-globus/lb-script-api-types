import type { LoaderOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/LoaderOptions.d.ts'
import type { TypeDescription } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/TypeDescription.d.ts'
import type { Composer } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/composer/Composer.d.ts'
import type { Construct } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/constructor/Construct.d.ts'
import type { PropertyUtils } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/introspector/PropertyUtils.d.ts'
import type { CollectionNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/CollectionNode.d.ts'
import type { MappingNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/MappingNode.d.ts'
import type { Node } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Node.d.ts'
import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
import type { ScalarNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/ScalarNode.d.ts'
import type { SequenceNode } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/SequenceNode.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Tuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/Tuple.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class BaseConstructor extends Object {
    constructor(arg0: LoaderOptions)
    readonly allowDuplicateKeys: boolean;
    composer: Composer;
    // private constructedObjects: Map<Node, Object>;
    readonly enumCaseSensitive: boolean;
    readonly explicitPropertyUtils: boolean;
    loadingConfig: LoaderOptions;
    // private maps2fill: Tuple<Map<Object, Object>, Tuple<Object, Object>>[];
    readonly propertyUtils: PropertyUtils;
    // private recursiveObjects: Node[];
    // private rootTag: Tag;
    // private sets2fill: Tuple<Object[], Object>[];
    // private typeDefinitions: Map<Class<Object>, TypeDescription>;
    // private typeTags: Map<Tag, Class<Object>>;
    readonly warnOnDuplicateKeys: boolean;
    readonly wrappedToRootException: boolean;
    // private yamlClassConstructors: Map<NodeId, Construct>;
    // private yamlConstructors: Map<Tag, Construct>;
    // private yamlMultiConstructors: { [key: string]: Construct };
    addTypeDescription(arg0: TypeDescription): TypeDescription;
    checkData(): boolean;
    constructArray(arg0: SequenceNode): Object;
    constructArrayStep2(arg0: SequenceNode, arg1: Object): Object;
    constructDocument(arg0: Node): Object;
    constructMapping(arg0: MappingNode): Map<Object, Object>;
    constructMapping2ndStep(arg0: MappingNode, arg1: Map<Object, Object>): void;
    constructObject(arg0: Node): Object;
    constructObjectNoCheck(arg0: Node): Object;
    constructScalar(arg0: ScalarNode): string;
    constructSequence(arg0: SequenceNode): (Object | null)[];
    constructSequenceStep2(arg0: SequenceNode, arg1: Object[]): void;
    constructSet(arg0: MappingNode): Object[];
    constructSet(arg0: SequenceNode): (Object | null)[];
    constructSet2ndStep(arg0: MappingNode, arg1: Object[]): void;
    createArray(arg0: Class<Object>, arg1: number): Object;
    createDefaultList(arg0: number): Object[];
    createDefaultMap(arg0: number): Map<Object, Object>;
    createDefaultSet(arg0: number): Object[];
    // private fillRecursive(): void;
    finalizeConstruction(arg0: Node, arg1: Object): Object;
    getConstructor(arg0: Node): Construct;
    getData(): Object;
    getLoadingConfig(): LoaderOptions;
    getPropertyUtils(): PropertyUtils;
    getSingleData(arg0: Class<Object>): Object;
    isAllowDuplicateKeys(): boolean;
    isEnumCaseSensitive(): boolean;
    isExplicitPropertyUtils(): boolean;
    isWarnOnDuplicateKeys(): boolean;
    isWrappedToRootException(): boolean;
    newInstance(arg0: Node): Object;
    newInstance(arg0: Class<Object>, arg1: Node): Object;
    newInstance(arg0: Class<Object>, arg1: Node, arg2: boolean): Object;
    newList(arg0: SequenceNode): Object[];
    newMap(arg0: MappingNode): Map<Object, Object>;
    newSet(arg0: CollectionNode<Object>): Object[];
    postponeMapFilling(arg0: Map<Object, Object>, arg1: Object, arg2: Object): void;
    postponeSetFilling(arg0: Object[], arg1: Object): void;
    setAllowDuplicateKeys(arg0: boolean): void;
    setComposer(arg0: Composer): void;
    setEnumCaseSensitive(arg0: boolean): void;
    setPropertyUtils(arg0: PropertyUtils): void;
    setWarnOnDuplicateKeys(arg0: boolean): void;
    setWrappedToRootException(arg0: boolean): void;
}