import type { Locale } from '../../../java/util/Locale.d.ts'
import type { ResourceBundle } from '../../../java/util/ResourceBundle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ResourceBundleProvider extends Object{
    getBundle(arg0: string, arg1: Locale): ResourceBundle;
}