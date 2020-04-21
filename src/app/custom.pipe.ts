import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'custom' })
export class CustomPipe implements PipeTransform {
  transform(contents, learningObjective, keyword, contentType) {
    return contents.filter((content) => {
      const learnCheck = content.learningObjective ? content.learningObjective.includes(learningObjective): false;
      const learnAllCheck = learningObjective === 'all' ? true : learnCheck;

      const keywordCheck = content.keywordTags ? content.keywordTags.includes(keyword) : false;
      const keywordAllCheck = keyword === 'all' ? true : keywordCheck;

      const typeCheck = contentType === 'all' ? true : content.contentType === contentType;

      return learnAllCheck && keywordAllCheck && typeCheck;
    });
  }
}