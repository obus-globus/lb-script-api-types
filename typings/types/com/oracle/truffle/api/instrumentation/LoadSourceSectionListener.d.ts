import type { LoadSourceSectionEvent } from '../../../../../com/oracle/truffle/api/instrumentation/LoadSourceSectionEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LoadSourceSectionListener extends Object{
    onLoad(event: LoadSourceSectionEvent): void;
}