import Pair, { ObjectFJ } from 'featherweight';

class A extends ObjectFJ {}
class B extends ObjectFJ {}

// eslint-disable-next-line no-console
console.log(new Pair(new A(), new B()).setFst(new B()));
