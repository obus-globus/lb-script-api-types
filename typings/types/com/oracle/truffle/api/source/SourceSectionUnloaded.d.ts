import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export abstract class SourceSectionUnloaded extends SourceSection {
    constructor(source: Source)
    getCharacters(): CharSequence;
    isAvailable(): boolean;
    isValid(): boolean;
}