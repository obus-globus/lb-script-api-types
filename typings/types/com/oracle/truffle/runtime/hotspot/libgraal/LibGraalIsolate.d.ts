import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { LibGraalIsolate$Cleaner } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalIsolate$Cleaner.d.ts'
import type { LibGraalObject } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { ReferenceQueue } from '../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LibGraalIsolate extends Object {
    static current(): LibGraalIsolate;
    static unregister(paramisolateId: number): void;
    private constructor(isolateId: number, address: number)
    // private address: number;
    // private cleaners: LibGraalIsolate$Cleaner[];
    // private cleanersQueue: ReferenceQueue<LibGraalObject>;
    // private destroyed: boolean;
    readonly id: number;
    // private singletons: JavaMap<Class<Object>, Object>;
    // private cleanHandles(): void;
    getId(): number;
    getSingleton<T extends unknown>(key: Class<T>, supplier: () => T): T;
    isValid(): boolean;
    register(obj: LibGraalObject, handle: number): void;
    toString(): string;
}