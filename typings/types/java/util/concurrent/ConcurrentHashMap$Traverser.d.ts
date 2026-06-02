import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ConcurrentHashMap$TableStack } from '../../../java/util/concurrent/ConcurrentHashMap$TableStack.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$Traverser<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number, arg3: number)
    // private baseIndex: number;
    // private baseLimit: number;
    // private baseSize: number;
    // private index: number;
    // private next: ConcurrentHashMap$Node<K, V>;
    // private spare: ConcurrentHashMap$TableStack<K, V>;
    // private stack: ConcurrentHashMap$TableStack<K, V>;
    // private tab: ConcurrentHashMap$Node<K, V>[];
    advance(): ConcurrentHashMap$Node<K, V>;
    // private pushState(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number): void;
    // private recoverState(arg0: number): void;
}