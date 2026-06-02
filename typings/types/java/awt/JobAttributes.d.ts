import type { JobAttributes$DefaultSelectionType } from '../../java/awt/JobAttributes$DefaultSelectionType.d.ts'
import type { JobAttributes$DestinationType } from '../../java/awt/JobAttributes$DestinationType.d.ts'
import type { JobAttributes$DialogType } from '../../java/awt/JobAttributes$DialogType.d.ts'
import type { JobAttributes$MultipleDocumentHandlingType } from '../../java/awt/JobAttributes$MultipleDocumentHandlingType.d.ts'
import type { JobAttributes$SidesType } from '../../java/awt/JobAttributes$SidesType.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class JobAttributes extends Object implements Cloneable {
    constructor()
    constructor(arg0: JobAttributes)
    constructor(arg0: number, arg1: JobAttributes$DefaultSelectionType, arg2: JobAttributes$DestinationType, arg3: JobAttributes$DialogType, arg4: string, arg5: number, arg6: number, arg7: JobAttributes$MultipleDocumentHandlingType, arg8: number[][], arg9: string, arg10: JobAttributes$SidesType)
    readonly copies: number;
    readonly defaultSelection: JobAttributes$DefaultSelectionType;
    readonly destination: JobAttributes$DestinationType;
    readonly dialog: JobAttributes$DialogType;
    readonly fileName: string;
    readonly fromPage: number;
    readonly maxPage: number;
    readonly minPage: number;
    readonly multipleDocumentHandling: JobAttributes$MultipleDocumentHandlingType;
    readonly pageRanges: number[][];
    // private prFirst: number;
    // private prLast: number;
    readonly printer: string;
    readonly sides: JobAttributes$SidesType;
    readonly toPage: number;
    clone(): Object;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    getCopies(): number;
    getDefaultSelection(): JobAttributes$DefaultSelectionType;
    getDestination(): JobAttributes$DestinationType;
    getDialog(): JobAttributes$DialogType;
    getFileName(): string;
    getFromPage(): number;
    getMaxPage(): number;
    getMinPage(): number;
    getMultipleDocumentHandling(): JobAttributes$MultipleDocumentHandlingType;
    getPageRanges(): number[][];
    getPrinter(): string;
    getSides(): JobAttributes$SidesType;
    getToPage(): number;
    hashCode(): number;
    set(arg0: JobAttributes): void;
    setCopies(arg0: number): void;
    setCopiesToDefault(): void;
    setDefaultSelection(arg0: JobAttributes$DefaultSelectionType): void;
    setDestination(arg0: JobAttributes$DestinationType): void;
    setDialog(arg0: JobAttributes$DialogType): void;
    setFileName(arg0: string): void;
    setFromPage(arg0: number): void;
    setMaxPage(arg0: number): void;
    setMinPage(arg0: number): void;
    setMultipleDocumentHandling(arg0: JobAttributes$MultipleDocumentHandlingType): void;
    setMultipleDocumentHandlingToDefault(): void;
    setPageRanges(arg0: number[][]): void;
    setPrinter(arg0: string): void;
    setSides(arg0: JobAttributes$SidesType): void;
    setSidesToDefault(): void;
    setToPage(arg0: number): void;
    toString(): string;
}