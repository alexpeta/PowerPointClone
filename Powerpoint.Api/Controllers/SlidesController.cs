﻿using Powerpoint.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Powerpoint.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SlidesController : ApiController
    {
        private DBcontext _dbContext { get; set; }

        public SlidesController()
        {
            this._dbContext = new DBcontext(Path.Combine(HostingEnvironment.ApplicationPhysicalPath, @"App_Data\db.json"));
        }

        // GET api/slides
        public IEnumerable<Slide> Get()
        {
            //var seed = Seed();
            return _dbContext.GetSlides();
        }

        private void Seed()
        {
            var list = new List<Slide>();
            list.Add(new Slide()
            {
                Id = "1",
                Content = "content",
                ImageUrl = "urlImage",
                SlideType = SlideType.TitleOnly,
                Title = "title"
            });
            list.Add(new Slide()
            {
                Id = "2",
                Content = "content,",
                ImageUrl = "urlImage",
                SlideType = SlideType.TitleOnly,
                Title = "title"
            });
            _dbContext.SaveSlides(list);
        }

        // GET api/slides/5
        public Slide Get(string id)
        {
            var slideList = _dbContext.GetSlides();
            var slide = slideList.Single(s => s.Id == id);

            return slide;
        }

        // POST api/slides
        public void Post([FromBody]Slide value)
        {
            var slideList = _dbContext.GetSlides();
            slideList.Add(value);
            _dbContext.SaveSlides(slideList);
        }

        // PUT api/slides/5
        public void Put(string id, [FromBody]Slide value)
        {
            var slideList = _dbContext.GetSlides();
            var slide = slideList.Single(s => s.Id == id);
            slide = value;

            _dbContext.SaveSlides(slideList);
        }

        // DELETE api/slides/5
        public void Delete(string id)
        {
            var slideList = _dbContext.GetSlides();

            slideList.Remove(slideList.Single(s => s.Id == id));
            _dbContext.SaveSlides(slideList);
        }
    }
}