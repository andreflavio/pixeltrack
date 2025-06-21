function converterPontos(score) {
  if (score >= 0) {
    return score * 10;
  }
  return 0;
}
module.exports = { converterPontos };