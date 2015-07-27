define(["require", "exports", 'PresentationRepository'], function (require, exports, PresentationRepository) {
    var SlideRepository = (function () {
        function SlideRepository() {
            this.pRepository = new PresentationRepository();
        }
        SlideRepository.prototype.Add = function (silde) {
            var presentation = this.pRepository.Get(silde.presentationId);
            presentation.slides.concat(silde);
            this.pRepository.Update(presentation);
        };
        SlideRepository.prototype.Get = function (ids) {
            var presentation = this.pRepository.Get(ids[0]);
            var slide;
            presentation.slides.forEach(function (item) {
                if (item.id == ids[1]) {
                    slide = item;
                }
            });
            return slide;
        };
        SlideRepository.prototype.Update = function (slide) {
            var presentation = this.pRepository.Get(slide.presentationId);
            presentation.slides.splice(presentation.slides.indexOf(slide), 1, slide);
            this.pRepository.Update(presentation);
        };
        SlideRepository.prototype.Delete = function (slide) {
            var presentation = this.pRepository.Get(slide.presentationId);
            presentation.slides.splice(presentation.slides.indexOf(slide), 1);
            this.pRepository.Update(presentation);
        };
        return SlideRepository;
    })();
});
//# sourceMappingURL=SlideRepository.js.map