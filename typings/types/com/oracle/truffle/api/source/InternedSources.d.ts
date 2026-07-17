import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { InternedSources$WeakSourceRef } from '../../../../../com/oracle/truffle/api/source/InternedSources$WeakSourceRef.d.ts'
import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceImpl } from '../../../../../com/oracle/truffle/api/source/SourceImpl.d.ts'
import type { SourceImpl$Key } from '../../../../../com/oracle/truffle/api/source/SourceImpl$Key.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InternedSources extends Object {
    constructor()
    // private deadReferences: ReferenceQueue<SourceImpl>;
    // private table: JavaMap<SourceImpl$Key, InternedSources$WeakSourceRef>;
    add(source: SourceImpl): void;
    // private cleanupStaleEntries(): void;
    intern(key: SourceImpl$Key): Source;
    resetNativeImageState(): void;
}