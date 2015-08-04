﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Powerpoint.Api.Models
{
    public enum SlideType
    {
        TitleOnly = 0,
        TitleWithImage,
        TitleWithText
    }

    public class Slide
    {
        public string Id { get; set; }
        public SlideType SlideType { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string ImageUrl { get; set; }
    }

    public class Layout
    {
        public int SlideLayoutTypeId { get; set; }
        public string Name { get; set; }
        public bool HasTitle { get; set; }
        public bool HasText { get; set; }
        public bool HasImage { get; set; }
    }
}