import { main } from './main';

/**
 * @file GASエディタから実行できる関数を定義する
 */

declare const global: any;
global.main = main;
