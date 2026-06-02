import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PluginType } from '../../../../../../org/apache/logging/log4j/core/config/plugins/util/PluginType.d.ts'
export class Node extends Object {
    static CATEGORY: string;
    constructor()
    constructor(node: Node)
    constructor(parent: Node, name: string, type: PluginType<Object>)
    readonly attributes: { [key: string]: string };
    readonly children: Node[];
    readonly name: string;
    readonly object: Object;
    readonly parent: Node;
    readonly type: PluginType<Object>;
    readonly value: string;
    getAttributes(): { [key: string]: string };
    getChildren(): Node[];
    getName(): string;
    getObject<T extends Object | number | string | boolean>(): T;
    getObject<T extends Object | number | string | boolean>(clazz: Class<T>): T;
    getParent(): Node;
    getType(): PluginType<Object>;
    getValue(): string;
    hasChildren(): boolean;
    isInstanceOf(clazz: Class<Object>): boolean;
    isRoot(): boolean;
    setObject(obj: Object): void;
    setParent(parent: Node): void;
    setValue(value: string): void;
    toString(): string;
}