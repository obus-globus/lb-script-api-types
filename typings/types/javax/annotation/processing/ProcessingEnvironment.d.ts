import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Filer } from '../../../javax/annotation/processing/Filer.d.ts'
import type { Messager } from '../../../javax/annotation/processing/Messager.d.ts'
import type { SourceVersion } from '../../../javax/lang/model/SourceVersion.d.ts'
import type { Elements } from '../../../javax/lang/model/util/Elements.d.ts'
import type { Types } from '../../../javax/lang/model/util/Types.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ProcessingEnvironment extends Object{
    getElementUtils(): Elements;
    getFiler(): Filer;
    getLocale(): Locale;
    getMessager(): Messager;
    getOptions(): JavaMap<string, string>;
    getSourceVersion(): SourceVersion;
    getTypeUtils(): Types;
    isPreviewEnabled(): boolean;
}