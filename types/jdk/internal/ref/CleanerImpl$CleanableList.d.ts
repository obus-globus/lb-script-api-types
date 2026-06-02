import type { CleanerImpl$CleanableList$Node } from '../../../jdk/internal/ref/CleanerImpl$CleanableList$Node.d.ts'
import type { PhantomCleanable } from '../../../jdk/internal/ref/PhantomCleanable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CleanerImpl$CleanableList extends Object {
    constructor()
    // private cache: CleanerImpl$CleanableList$Node;
    // private head: CleanerImpl$CleanableList$Node;
    insert(arg0: PhantomCleanable<Object>): void;
    isEmpty(): boolean;
    remove(arg0: PhantomCleanable<Object>): boolean;
    reset(): void;
}