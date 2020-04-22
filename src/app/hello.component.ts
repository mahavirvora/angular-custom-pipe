import { Component, Input, OnInit } from '@angular/core';
import { CustomPipe } from './custom.pipe';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.css' ]
})
export class HelloComponent implements OnInit {
  @Input() products;
  learningObjective = "all";
  keyword = "all";
  contentType = "all";
  learnObjectiveDrop = [];
  keywordTags = [];
  contentTypes = [];
  constructor(private customPipe: CustomPipe) { 
  }

  ngOnInit() {
    this.learnObjectiveDrop = this.products ? this.products.filter.learningObjectives : [];
    this.keywordTags = this.products ? this.products.filter.keywords : [];
    this.contentTypes = this.products ? this.products.filter.contentTypes : [];
  }

  learningObjectiveChanged(learningObjective) {
    const contents = this.customPipe.transform(
      this.products.contents,
      learningObjective,
      this.keyword,
      this.contentType
    );
    this.setKeywords(contents);
    this.setContentTypes(contents);
  }

  keywordChanged(keyword) {
    const contents = this.customPipe.transform(
      this.products.contents,
      this.learningObjective,
      keyword,
      this.contentType
    );
    this.setLearningObjectives(contents);
    this.setContentTypes(contents);
  }
  
  contentTypeChanged(contentType) {
    const contents = this.customPipe.transform(
      this.products.contents,
      this.learningObjective,
      this.keyword,
      contentType
    );
    this.setKeywords(contents);
    this.setLearningObjectives(contents);
  }

  setKeywords(contents) {
    const keywords = Array.prototype.concat.apply([], contents.map(content => content.keywordTags));
    this.keywordTags = this.products.filter.keywords.filter((keyword) => keywords.includes(keyword.id));
  }

  setContentTypes(contents) {
    this.contentTypes = contents.map(content => content.contentType);
  }

  setLearningObjectives(contents) {
    const learningObjectives = Array.prototype.concat.apply([], contents.map(content => content.learningObjective));
    this.learnObjectiveDrop = this.products.filter.learningObjectives.filter((learningObjective) => learningObjectives.includes(learningObjective.id));
  }

  getKeywordName(keywordTagId) {
    if (keywordTagId) {
      return this.keywordTags.filter((keyword) => {
        return keywordTagId.includes(keyword.id) ? keyword.name : false;
      }).map(keyword => keyword.name);
    }
  }

  getlearningObjectiveName(learningObjective) {
    if (learningObjective) {
      return this.learnObjectiveDrop.filter((learn) => {
        return learningObjective.includes(learn.id) ? learn.name : false;
      }).map(learn => learn.name);
    }
  }
}

